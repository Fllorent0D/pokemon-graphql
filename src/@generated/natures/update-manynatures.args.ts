import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesUpdateManyMutationInput } from './natures-update-many-mutation.input';
import { Type } from 'class-transformer';
import { naturesWhereInput } from './natures-where.input';

@ArgsType()
export class UpdateManynaturesArgs {

    @Field(() => naturesUpdateManyMutationInput, {nullable:false})
    @Type(() => naturesUpdateManyMutationInput)
    data!: naturesUpdateManyMutationInput;

    @Field(() => naturesWhereInput, {nullable:true})
    @Type(() => naturesWhereInput)
    where?: naturesWhereInput;
}
