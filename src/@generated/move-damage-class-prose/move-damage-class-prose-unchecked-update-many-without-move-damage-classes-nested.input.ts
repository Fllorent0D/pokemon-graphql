import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseCreateWithoutMove_damage_classesInput } from './move-damage-class-prose-create-without-move-damage-classes.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput } from './move-damage-class-prose-create-or-connect-without-move-damage-classes.input';
import { move_damage_class_proseUpsertWithWhereUniqueWithoutMove_damage_classesInput } from './move-damage-class-prose-upsert-with-where-unique-without-move-damage-classes.input';
import { move_damage_class_proseWhereUniqueInput } from './move-damage-class-prose-where-unique.input';
import { move_damage_class_proseUpdateWithWhereUniqueWithoutMove_damage_classesInput } from './move-damage-class-prose-update-with-where-unique-without-move-damage-classes.input';
import { move_damage_class_proseUpdateManyWithWhereWithoutMove_damage_classesInput } from './move-damage-class-prose-update-many-with-where-without-move-damage-classes.input';
import { move_damage_class_proseScalarWhereInput } from './move-damage-class-prose-scalar-where.input';

@InputType()
export class move_damage_class_proseUncheckedUpdateManyWithoutMove_damage_classesNestedInput {

    @Field(() => [move_damage_class_proseCreateWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateWithoutMove_damage_classesInput)
    create?: Array<move_damage_class_proseCreateWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput)
    connectOrCreate?: Array<move_damage_class_proseCreateOrConnectWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseUpsertWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseUpsertWithWhereUniqueWithoutMove_damage_classesInput)
    upsert?: Array<move_damage_class_proseUpsertWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    set?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    disconnect?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    delete?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    connect?: Array<move_damage_class_proseWhereUniqueInput>;

    @Field(() => [move_damage_class_proseUpdateWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseUpdateWithWhereUniqueWithoutMove_damage_classesInput)
    update?: Array<move_damage_class_proseUpdateWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseUpdateManyWithWhereWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => move_damage_class_proseUpdateManyWithWhereWithoutMove_damage_classesInput)
    updateMany?: Array<move_damage_class_proseUpdateManyWithWhereWithoutMove_damage_classesInput>;

    @Field(() => [move_damage_class_proseScalarWhereInput], {nullable:true})
    @Type(() => move_damage_class_proseScalarWhereInput)
    deleteMany?: Array<move_damage_class_proseScalarWhereInput>;
}
