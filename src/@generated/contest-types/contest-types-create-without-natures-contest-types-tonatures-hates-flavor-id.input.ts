import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsCreateNestedManyWithoutContest_typesInput } from '../berry-flavors/berry-flavors-create-nested-many-without-contest-types.input';
import { contest_type_namesCreateNestedManyWithoutContest_typesInput } from '../contest-type-names/contest-type-names-create-nested-many-without-contest-types.input';
import { movesCreateNestedManyWithoutContest_typesInput } from '../moves/moves-create-nested-many-without-contest-types.input';
import { naturesCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput } from '../natures/natures-create-nested-many-without-contest-types-contest-types-tonatures-likes-flavor-id.input';

@InputType()
export class contest_typesCreateWithoutNatures_contest_typesTonatures_hates_flavor_idInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berry_flavorsCreateNestedManyWithoutContest_typesInput, {nullable:true})
    berry_flavors?: berry_flavorsCreateNestedManyWithoutContest_typesInput;

    @Field(() => contest_type_namesCreateNestedManyWithoutContest_typesInput, {nullable:true})
    contest_type_names?: contest_type_namesCreateNestedManyWithoutContest_typesInput;

    @Field(() => movesCreateNestedManyWithoutContest_typesInput, {nullable:true})
    moves?: movesCreateNestedManyWithoutContest_typesInput;

    @Field(() => naturesCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: naturesCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput;
}
