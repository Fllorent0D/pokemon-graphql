import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Stat_hintsRelationFilter } from '../prisma/stat-hints-relation-filter.input';

@InputType()
export class stat_hint_namesWhereInput {

    @Field(() => [stat_hint_namesWhereInput], {nullable:true})
    AND?: Array<stat_hint_namesWhereInput>;

    @Field(() => [stat_hint_namesWhereInput], {nullable:true})
    OR?: Array<stat_hint_namesWhereInput>;

    @Field(() => [stat_hint_namesWhereInput], {nullable:true})
    NOT?: Array<stat_hint_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    stat_hint_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Stat_hintsRelationFilter, {nullable:true})
    stat_hints?: Stat_hintsRelationFilter;
}
