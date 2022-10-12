import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Berry_flavorsListRelationFilter } from '../prisma/berry-flavors-list-relation-filter.input';
import { Contest_type_namesListRelationFilter } from '../prisma/contest-type-names-list-relation-filter.input';
import { MovesListRelationFilter } from '../prisma/moves-list-relation-filter.input';
import { NaturesListRelationFilter } from '../prisma/natures-list-relation-filter.input';

@InputType()
export class contest_typesWhereInput {

    @Field(() => [contest_typesWhereInput], {nullable:true})
    AND?: Array<contest_typesWhereInput>;

    @Field(() => [contest_typesWhereInput], {nullable:true})
    OR?: Array<contest_typesWhereInput>;

    @Field(() => [contest_typesWhereInput], {nullable:true})
    NOT?: Array<contest_typesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Berry_flavorsListRelationFilter, {nullable:true})
    berry_flavors?: Berry_flavorsListRelationFilter;

    @Field(() => Contest_type_namesListRelationFilter, {nullable:true})
    contest_type_names?: Contest_type_namesListRelationFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: NaturesListRelationFilter;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    natures_contest_typesTonatures_hates_flavor_id?: NaturesListRelationFilter;
}
