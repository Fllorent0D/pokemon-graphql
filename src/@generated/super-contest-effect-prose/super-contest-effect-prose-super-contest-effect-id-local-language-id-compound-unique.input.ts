import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class super_contest_effect_proseSuper_contest_effect_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    super_contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
