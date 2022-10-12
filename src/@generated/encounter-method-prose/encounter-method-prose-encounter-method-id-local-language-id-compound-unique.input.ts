import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class encounter_method_proseEncounter_method_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
