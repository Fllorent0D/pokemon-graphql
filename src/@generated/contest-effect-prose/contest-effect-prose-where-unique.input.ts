import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseContest_effect_idLocal_language_idCompoundUniqueInput } from './contest-effect-prose-contest-effect-id-local-language-id-compound-unique.input';

@InputType()
export class contest_effect_proseWhereUniqueInput {

    @Field(() => contest_effect_proseContest_effect_idLocal_language_idCompoundUniqueInput, {nullable:true})
    contest_effect_id_local_language_id?: contest_effect_proseContest_effect_idLocal_language_idCompoundUniqueInput;
}
