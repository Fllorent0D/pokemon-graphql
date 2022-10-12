import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesPokeathlon_stat_idLocal_language_idCompoundUniqueInput } from './pokeathlon-stat-names-pokeathlon-stat-id-local-language-id-compound-unique.input';

@InputType()
export class pokeathlon_stat_namesWhereUniqueInput {

    @Field(() => pokeathlon_stat_namesPokeathlon_stat_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokeathlon_stat_id_local_language_id?: pokeathlon_stat_namesPokeathlon_stat_idLocal_language_idCompoundUniqueInput;
}
