import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokemon_egg_groupsUpdateManyWithoutEgg_groupsNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-egg-groups-nested.input';

@InputType()
export class egg_groupsUpdateWithoutEgg_group_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokemon_egg_groupsUpdateManyWithoutEgg_groupsNestedInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUpdateManyWithoutEgg_groupsNestedInput;
}
