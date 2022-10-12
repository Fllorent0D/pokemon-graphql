import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_egg_groupsUncheckedUpdateManyWithoutEgg_groupsNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many-without-egg-groups-nested.input';

@InputType()
export class egg_groupsUncheckedUpdateWithoutEgg_group_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_egg_groupsUncheckedUpdateManyWithoutEgg_groupsNestedInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUncheckedUpdateManyWithoutEgg_groupsNestedInput;
}
