import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseSuper_contest_effect_idLocal_language_idCompoundUniqueInput } from './super-contest-effect-prose-super-contest-effect-id-local-language-id-compound-unique.input';

@InputType()
export class super_contest_effect_proseWhereUniqueInput {

    @Field(() => super_contest_effect_proseSuper_contest_effect_idLocal_language_idCompoundUniqueInput, {nullable:true})
    super_contest_effect_id_local_language_id?: super_contest_effect_proseSuper_contest_effect_idLocal_language_idCompoundUniqueInput;
}
