import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseScalarWhereInput } from './move-damage-class-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseUpdateManyMutationInput } from './move-damage-class-prose-update-many-mutation.input';

@InputType()
export class move_damage_class_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => move_damage_class_proseScalarWhereInput, {nullable:false})
    @Type(() => move_damage_class_proseScalarWhereInput)
    where!: move_damage_class_proseScalarWhereInput;

    @Field(() => move_damage_class_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_damage_class_proseUpdateManyMutationInput)
    data!: move_damage_class_proseUpdateManyMutationInput;
}
