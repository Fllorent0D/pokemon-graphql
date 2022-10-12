import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesStat_hint_idLocal_language_idCompoundUniqueInput } from './stat-hint-names-stat-hint-id-local-language-id-compound-unique.input';

@InputType()
export class stat_hint_namesWhereUniqueInput {

    @Field(() => stat_hint_namesStat_hint_idLocal_language_idCompoundUniqueInput, {nullable:true})
    stat_hint_id_local_language_id?: stat_hint_namesStat_hint_idLocal_language_idCompoundUniqueInput;
}
