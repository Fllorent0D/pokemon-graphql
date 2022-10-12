import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Growth_ratesRelationFilter } from '../prisma/growth-rates-relation-filter.input';

@InputType()
export class growth_rate_proseWhereInput {

    @Field(() => [growth_rate_proseWhereInput], {nullable:true})
    AND?: Array<growth_rate_proseWhereInput>;

    @Field(() => [growth_rate_proseWhereInput], {nullable:true})
    OR?: Array<growth_rate_proseWhereInput>;

    @Field(() => [growth_rate_proseWhereInput], {nullable:true})
    NOT?: Array<growth_rate_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Growth_ratesRelationFilter, {nullable:true})
    growth_rates?: Growth_ratesRelationFilter;
}
