import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesUpdateManyMutationInput } from './abilities-update-many-mutation.input';
import { Type } from 'class-transformer';
import { abilitiesWhereInput } from './abilities-where.input';

@ArgsType()
export class UpdateManyabilitiesArgs {

    @Field(() => abilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => abilitiesUpdateManyMutationInput)
    data!: abilitiesUpdateManyMutationInput;

    @Field(() => abilitiesWhereInput, {nullable:true})
    @Type(() => abilitiesWhereInput)
    where?: abilitiesWhereInput;
}
