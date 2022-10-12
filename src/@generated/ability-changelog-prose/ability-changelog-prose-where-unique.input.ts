import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseAbility_changelog_idLocal_language_idCompoundUniqueInput } from './ability-changelog-prose-ability-changelog-id-local-language-id-compound-unique.input';

@InputType()
export class ability_changelog_proseWhereUniqueInput {

    @Field(() => ability_changelog_proseAbility_changelog_idLocal_language_idCompoundUniqueInput, {nullable:true})
    ability_changelog_id_local_language_id?: ability_changelog_proseAbility_changelog_idLocal_language_idCompoundUniqueInput;
}
