import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Location_areasRelationFilter } from '../prisma/location-areas-relation-filter.input';

@InputType()
export class location_area_proseWhereInput {

    @Field(() => [location_area_proseWhereInput], {nullable:true})
    AND?: Array<location_area_proseWhereInput>;

    @Field(() => [location_area_proseWhereInput], {nullable:true})
    OR?: Array<location_area_proseWhereInput>;

    @Field(() => [location_area_proseWhereInput], {nullable:true})
    NOT?: Array<location_area_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Location_areasRelationFilter, {nullable:true})
    location_areas?: Location_areasRelationFilter;
}
