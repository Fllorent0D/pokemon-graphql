import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { egg_groupsUpdateOneRequiredWithoutEgg_group_proseNestedInput } from '../egg-groups/egg-groups-update-one-required-without-egg-group-prose-nested.input';

@InputType()
export class egg_group_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => egg_groupsUpdateOneRequiredWithoutEgg_group_proseNestedInput, {nullable:true})
    egg_groups?: egg_groupsUpdateOneRequiredWithoutEgg_group_proseNestedInput;
}
