import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class move_flavor_summariesWhereInput {

    @Field(() => [move_flavor_summariesWhereInput], {nullable:true})
    AND?: Array<move_flavor_summariesWhereInput>;

    @Field(() => [move_flavor_summariesWhereInput], {nullable:true})
    OR?: Array<move_flavor_summariesWhereInput>;

    @Field(() => [move_flavor_summariesWhereInput], {nullable:true})
    NOT?: Array<move_flavor_summariesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor_summary?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves?: MovesRelationFilter;
}
