import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { StatsRelationFilter } from '../prisma/stats-relation-filter.input';

@InputType()
export class stat_namesWhereInput {

    @Field(() => [stat_namesWhereInput], {nullable:true})
    AND?: Array<stat_namesWhereInput>;

    @Field(() => [stat_namesWhereInput], {nullable:true})
    OR?: Array<stat_namesWhereInput>;

    @Field(() => [stat_namesWhereInput], {nullable:true})
    NOT?: Array<stat_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => StatsRelationFilter, {nullable:true})
    stats?: StatsRelationFilter;
}
