import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ability_changelog_proseAbility_changelog_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    ability_changelog_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
