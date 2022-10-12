import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutEgg_group_proseNestedInput } from '../languages/languages-update-one-required-without-egg-group-prose-nested.input';

@InputType()
export class egg_group_proseUpdateWithoutEgg_groupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutEgg_group_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutEgg_group_proseNestedInput;
}
