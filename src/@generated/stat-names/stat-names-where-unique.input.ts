import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesStat_idLocal_language_idCompoundUniqueInput } from './stat-names-stat-id-local-language-id-compound-unique.input';

@InputType()
export class stat_namesWhereUniqueInput {

    @Field(() => stat_namesStat_idLocal_language_idCompoundUniqueInput, {nullable:true})
    stat_id_local_language_id?: stat_namesStat_idLocal_language_idCompoundUniqueInput;
}
