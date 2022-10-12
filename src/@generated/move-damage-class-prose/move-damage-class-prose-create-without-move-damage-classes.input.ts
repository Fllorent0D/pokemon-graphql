import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_damage_class_proseInput } from '../languages/languages-create-nested-one-without-move-damage-class-prose.input';

@InputType()
export class move_damage_class_proseCreateWithoutMove_damage_classesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutMove_damage_class_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_damage_class_proseInput;
}
