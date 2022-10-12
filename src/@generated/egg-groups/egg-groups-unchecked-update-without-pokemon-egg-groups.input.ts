import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { egg_group_proseUncheckedUpdateManyWithoutEgg_groupsNestedInput } from '../egg-group-prose/egg-group-prose-unchecked-update-many-without-egg-groups-nested.input';

@InputType()
export class egg_groupsUncheckedUpdateWithoutPokemon_egg_groupsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => egg_group_proseUncheckedUpdateManyWithoutEgg_groupsNestedInput, {nullable:true})
    egg_group_prose?: egg_group_proseUncheckedUpdateManyWithoutEgg_groupsNestedInput;
}
