import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { egg_group_proseUpdateManyWithoutEgg_groupsNestedInput } from '../egg-group-prose/egg-group-prose-update-many-without-egg-groups-nested.input';

@InputType()
export class egg_groupsUpdateWithoutPokemon_egg_groupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => egg_group_proseUpdateManyWithoutEgg_groupsNestedInput, {nullable:true})
    egg_group_prose?: egg_group_proseUpdateManyWithoutEgg_groupsNestedInput;
}
