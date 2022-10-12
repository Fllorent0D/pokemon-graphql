import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutMove_damage_classesInput } from './types-create-without-move-damage-classes.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutMove_damage_classesInput } from './types-create-or-connect-without-move-damage-classes.input';
import { typesUpsertWithWhereUniqueWithoutMove_damage_classesInput } from './types-upsert-with-where-unique-without-move-damage-classes.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithWhereUniqueWithoutMove_damage_classesInput } from './types-update-with-where-unique-without-move-damage-classes.input';
import { typesUpdateManyWithWhereWithoutMove_damage_classesInput } from './types-update-many-with-where-without-move-damage-classes.input';
import { typesScalarWhereInput } from './types-scalar-where.input';

@InputType()
export class typesUncheckedUpdateManyWithoutMove_damage_classesNestedInput {

    @Field(() => [typesCreateWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesCreateWithoutMove_damage_classesInput)
    create?: Array<typesCreateWithoutMove_damage_classesInput>;

    @Field(() => [typesCreateOrConnectWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesCreateOrConnectWithoutMove_damage_classesInput)
    connectOrCreate?: Array<typesCreateOrConnectWithoutMove_damage_classesInput>;

    @Field(() => [typesUpsertWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesUpsertWithWhereUniqueWithoutMove_damage_classesInput)
    upsert?: Array<typesUpsertWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    set?: Array<typesWhereUniqueInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    disconnect?: Array<typesWhereUniqueInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    delete?: Array<typesWhereUniqueInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: Array<typesWhereUniqueInput>;

    @Field(() => [typesUpdateWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesUpdateWithWhereUniqueWithoutMove_damage_classesInput)
    update?: Array<typesUpdateWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [typesUpdateManyWithWhereWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesUpdateManyWithWhereWithoutMove_damage_classesInput)
    updateMany?: Array<typesUpdateManyWithWhereWithoutMove_damage_classesInput>;

    @Field(() => [typesScalarWhereInput], {nullable:true})
    @Type(() => typesScalarWhereInput)
    deleteMany?: Array<typesScalarWhereInput>;
}
