import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berry_flavorsUncheckedUpdateManyWithoutContest_typesNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-contest-types-nested.input';
import { contest_type_namesUncheckedUpdateManyWithoutContest_typesNestedInput } from '../contest-type-names/contest-type-names-unchecked-update-many-without-contest-types-nested.input';
import { naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_likes_flavor_idNestedInput } from '../natures/natures-unchecked-update-many-without-contest-types-contest-types-tonatures-likes-flavor-id-nested.input';
import { naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput } from '../natures/natures-unchecked-update-many-without-contest-types-contest-types-tonatures-hates-flavor-id-nested.input';

@InputType()
export class contest_typesUncheckedUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => berry_flavorsUncheckedUpdateManyWithoutContest_typesNestedInput, {nullable:true})
    berry_flavors?: berry_flavorsUncheckedUpdateManyWithoutContest_typesNestedInput;

    @Field(() => contest_type_namesUncheckedUpdateManyWithoutContest_typesNestedInput, {nullable:true})
    contest_type_names?: contest_type_namesUncheckedUpdateManyWithoutContest_typesNestedInput;

    @Field(() => naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_likes_flavor_idNestedInput, {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_likes_flavor_idNestedInput;

    @Field(() => naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput, {nullable:true})
    natures_contest_typesTonatures_hates_flavor_id?: naturesUncheckedUpdateManyWithoutContest_types_contest_typesTonatures_hates_flavor_idNestedInput;
}
