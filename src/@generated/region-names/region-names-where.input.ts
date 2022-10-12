import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { RegionsRelationFilter } from '../prisma/regions-relation-filter.input';

@InputType()
export class region_namesWhereInput {

    @Field(() => [region_namesWhereInput], {nullable:true})
    AND?: Array<region_namesWhereInput>;

    @Field(() => [region_namesWhereInput], {nullable:true})
    OR?: Array<region_namesWhereInput>;

    @Field(() => [region_namesWhereInput], {nullable:true})
    NOT?: Array<region_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => RegionsRelationFilter, {nullable:true})
    regions?: RegionsRelationFilter;
}
