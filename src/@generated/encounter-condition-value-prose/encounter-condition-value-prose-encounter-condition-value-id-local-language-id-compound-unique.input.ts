import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class encounter_condition_value_proseEncounter_condition_value_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
