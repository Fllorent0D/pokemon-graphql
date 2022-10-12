import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseCreateWithoutMove_damage_classesInput } from './move-damage-class-prose-create-without-move-damage-classes.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput } from './move-damage-class-prose-create-or-connect-without-move-damage-classes.input';
import { move_damage_class_proseWhereUniqueInput } from './move-damage-class-prose-where-unique.input';

@InputType()
export class move_damage_class_proseCreateNestedManyWithoutMove_damage_classesInput {

    @Field(() => [move_damage_class_proseCreateWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateWithoutMove_damage_classesInput)
    create?: Array<move_damage_class_proseCreateWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput)
    connectOrCreate?: Array<move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    connect?: Array<move_damage_class_proseWhereUniqueInput>;
}
