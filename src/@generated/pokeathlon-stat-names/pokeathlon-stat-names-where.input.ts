import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokeathlon_statsRelationFilter } from '../prisma/pokeathlon-stats-relation-filter.input';

@InputType()
export class pokeathlon_stat_namesWhereInput {

    @Field(() => [pokeathlon_stat_namesWhereInput], {nullable:true})
    AND?: Array<pokeathlon_stat_namesWhereInput>;

    @Field(() => [pokeathlon_stat_namesWhereInput], {nullable:true})
    OR?: Array<pokeathlon_stat_namesWhereInput>;

    @Field(() => [pokeathlon_stat_namesWhereInput], {nullable:true})
    NOT?: Array<pokeathlon_stat_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokeathlon_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokeathlon_statsRelationFilter, {nullable:true})
    pokeathlon_stats?: Pokeathlon_statsRelationFilter;
}
