import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class contest_effect_proseContest_effect_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
