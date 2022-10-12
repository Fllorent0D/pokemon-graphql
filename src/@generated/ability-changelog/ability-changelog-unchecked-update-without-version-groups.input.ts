import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ability_changelog_proseUncheckedUpdateManyWithoutAbility_changelogNestedInput } from '../ability-changelog-prose/ability-changelog-prose-unchecked-update-many-without-ability-changelog-nested.input';

@InputType()
export class ability_changelogUncheckedUpdateWithoutVersion_groupsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ability_id?: IntFieldUpdateOperationsInput;

    @Field(() => ability_changelog_proseUncheckedUpdateManyWithoutAbility_changelogNestedInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUncheckedUpdateManyWithoutAbility_changelogNestedInput;
}
