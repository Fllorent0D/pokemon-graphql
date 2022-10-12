import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berry_flavorsUpdateManyWithoutContest_typesNestedInput } from '../berry-flavors/berry-flavors-update-many-without-contest-types-nested.input';
import { movesUpdateManyWithoutContest_typesNestedInput } from '../moves/moves-update-many-without-contest-types-nested.input';
import { naturesUpdateManyWithoutContest_types_contest_typesTonatures_likes_flavor_idNestedInput } from '../natures/natures-update-many-without-contest-types-contest-types-tonatures-likes-flavor-id-nested.input';
import { naturesUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput } from '../natures/natures-update-many-without-contest-types-contest-types-tonatures-hates-flavor-id-nested.input';

@InputType()
export class contest_typesUpdateWithoutContest_type_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => berry_flavorsUpdateManyWithoutContest_typesNestedInput, {nullable:true})
    berry_flavors?: berry_flavorsUpdateManyWithoutContest_typesNestedInput;

    @Field(() => movesUpdateManyWithoutContest_typesNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutContest_typesNestedInput;

    @Field(() => naturesUpdateManyWithoutContest_types_contest_typesTonatures_likes_flavor_idNestedInput, {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: naturesUpdateManyWithoutContest_types_contest_typesTonatures_likes_flavor_idNestedInput;

    @Field(() => naturesUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput, {nullable:true})
    natures_contest_typesTonatures_hates_flavor_id?: naturesUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput;
}
