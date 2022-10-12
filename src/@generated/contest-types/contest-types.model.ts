import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { berry_flavors } from '../berry-flavors/berry-flavors.model';
import { contest_type_names } from '../contest-type-names/contest-type-names.model';
import { moves } from '../moves/moves.model';
import { natures } from '../natures/natures.model';
import { Contest_typesCount } from '../prisma/contest-types-count.output';

@ObjectType()
export class contest_types {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [berry_flavors], {nullable:true})
    berry_flavors?: Array<berry_flavors>;

    @Field(() => [contest_type_names], {nullable:true})
    contest_type_names?: Array<contest_type_names>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => [natures], {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: Array<natures>;

    @Field(() => [natures], {nullable:true})
    natures_contest_typesTonatures_hates_flavor_id?: Array<natures>;

    @Field(() => Contest_typesCount, {nullable:false})
    _count?: Contest_typesCount;
}
