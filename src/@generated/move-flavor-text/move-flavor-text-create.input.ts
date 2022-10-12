import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_flavor_textInput } from '../languages/languages-create-nested-one-without-move-flavor-text.input';
import { version_groupsCreateNestedOneWithoutMove_flavor_textInput } from '../version-groups/version-groups-create-nested-one-without-move-flavor-text.input';
import { movesCreateNestedOneWithoutMove_flavor_textInput } from '../moves/moves-create-nested-one-without-move-flavor-text.input';

@InputType()
export class move_flavor_textCreateInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_flavor_textInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_flavor_textInput;

    @Field(() => version_groupsCreateNestedOneWithoutMove_flavor_textInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutMove_flavor_textInput;

    @Field(() => movesCreateNestedOneWithoutMove_flavor_textInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_flavor_textInput;
}
