import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { contest_type_namesUncheckedCreateNestedManyWithoutContest_typesInput } from '../contest-type-names/contest-type-names-unchecked-create-nested-many-without-contest-types.input';
import { movesUncheckedCreateNestedManyWithoutContest_typesInput } from '../moves/moves-unchecked-create-nested-many-without-contest-types.input';
import { naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput } from '../natures/natures-unchecked-create-nested-many-without-contest-types-contest-types-tonatures-likes-flavor-id.input';
import { naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_hates_flavor_idInput } from '../natures/natures-unchecked-create-nested-many-without-contest-types-contest-types-tonatures-hates-flavor-id.input';

@InputType()
export class contest_typesUncheckedCreateWithoutBerry_flavorsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => contest_type_namesUncheckedCreateNestedManyWithoutContest_typesInput, {nullable:true})
    contest_type_names?: contest_type_namesUncheckedCreateNestedManyWithoutContest_typesInput;

    @Field(() => movesUncheckedCreateNestedManyWithoutContest_typesInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutContest_typesInput;

    @Field(() => naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput, {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput;

    @Field(() => naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_hates_flavor_idInput, {nullable:true})
    natures_contest_typesTonatures_hates_flavor_id?: naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_hates_flavor_idInput;
}
