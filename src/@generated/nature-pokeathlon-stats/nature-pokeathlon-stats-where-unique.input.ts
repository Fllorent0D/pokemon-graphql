import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsNature_idPokeathlon_stat_idCompoundUniqueInput } from './nature-pokeathlon-stats-nature-id-pokeathlon-stat-id-compound-unique.input';

@InputType()
export class nature_pokeathlon_statsWhereUniqueInput {

    @Field(() => nature_pokeathlon_statsNature_idPokeathlon_stat_idCompoundUniqueInput, {nullable:true})
    nature_id_pokeathlon_stat_id?: nature_pokeathlon_statsNature_idPokeathlon_stat_idCompoundUniqueInput;
}
