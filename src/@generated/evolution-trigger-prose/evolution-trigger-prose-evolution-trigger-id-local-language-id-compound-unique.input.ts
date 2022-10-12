import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class evolution_trigger_proseEvolution_trigger_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
