import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { egg_group_proseUpdateManyWithoutEgg_groupsNestedInput } from '../egg-group-prose/egg-group-prose-update-many-without-egg-groups-nested.input';
import { pokemon_egg_groupsUpdateManyWithoutEgg_groupsNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-egg-groups-nested.input';

@InputType()
export class egg_groupsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => egg_group_proseUpdateManyWithoutEgg_groupsNestedInput, {nullable:true})
    egg_group_prose?: egg_group_proseUpdateManyWithoutEgg_groupsNestedInput;

    @Field(() => pokemon_egg_groupsUpdateManyWithoutEgg_groupsNestedInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUpdateManyWithoutEgg_groupsNestedInput;
}
