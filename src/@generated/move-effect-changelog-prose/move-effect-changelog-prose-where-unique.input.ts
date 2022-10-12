import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseMove_effect_changelog_idLocal_language_idCompoundUniqueInput } from './move-effect-changelog-prose-move-effect-changelog-id-local-language-id-compound-unique.input';

@InputType()
export class move_effect_changelog_proseWhereUniqueInput {

    @Field(() => move_effect_changelog_proseMove_effect_changelog_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_effect_changelog_id_local_language_id?: move_effect_changelog_proseMove_effect_changelog_idLocal_language_idCompoundUniqueInput;
}
