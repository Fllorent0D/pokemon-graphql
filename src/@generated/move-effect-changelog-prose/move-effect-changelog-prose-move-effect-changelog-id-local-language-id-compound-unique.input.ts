import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_effect_changelog_proseMove_effect_changelog_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    move_effect_changelog_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
