import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesUpdateInput } from './natures-update.input';
import { Type } from 'class-transformer';
import { naturesWhereUniqueInput } from './natures-where-unique.input';

@ArgsType()
export class UpdateOnenaturesArgs {

    @Field(() => naturesUpdateInput, {nullable:false})
    @Type(() => naturesUpdateInput)
    data!: naturesUpdateInput;

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;
}
