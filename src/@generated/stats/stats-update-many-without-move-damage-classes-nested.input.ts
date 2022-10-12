import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutMove_damage_classesInput } from './stats-create-without-move-damage-classes.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutMove_damage_classesInput } from './stats-create-or-connect-without-move-damage-classes.input';
import { statsUpsertWithWhereUniqueWithoutMove_damage_classesInput } from './stats-upsert-with-where-unique-without-move-damage-classes.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { statsUpdateWithWhereUniqueWithoutMove_damage_classesInput } from './stats-update-with-where-unique-without-move-damage-classes.input';
import { statsUpdateManyWithWhereWithoutMove_damage_classesInput } from './stats-update-many-with-where-without-move-damage-classes.input';
import { statsScalarWhereInput } from './stats-scalar-where.input';

@InputType()
export class statsUpdateManyWithoutMove_damage_classesNestedInput {

    @Field(() => [statsCreateWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsCreateWithoutMove_damage_classesInput)
    create?: Array<statsCreateWithoutMove_damage_classesInput>;

    @Field(() => [statsCreateOrConnectWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsCreateOrConnectWithoutMove_damage_classesInput)
    connectOrCreate?: Array<statsCreateOrConnectWithoutMove_damage_classesInput>;

    @Field(() => [statsUpsertWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsUpsertWithWhereUniqueWithoutMove_damage_classesInput)
    upsert?: Array<statsUpsertWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [statsWhereUniqueInput], {nullable:true})
    @Type(() => statsWhereUniqueInput)
    set?: Array<statsWhereUniqueInput>;

    @Field(() => [statsWhereUniqueInput], {nullable:true})
    @Type(() => statsWhereUniqueInput)
    disconnect?: Array<statsWhereUniqueInput>;

    @Field(() => [statsWhereUniqueInput], {nullable:true})
    @Type(() => statsWhereUniqueInput)
    delete?: Array<statsWhereUniqueInput>;

    @Field(() => [statsWhereUniqueInput], {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: Array<statsWhereUniqueInput>;

    @Field(() => [statsUpdateWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsUpdateWithWhereUniqueWithoutMove_damage_classesInput)
    update?: Array<statsUpdateWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [statsUpdateManyWithWhereWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => statsUpdateManyWithWhereWithoutMove_damage_classesInput)
    updateMany?: Array<statsUpdateManyWithWhereWithoutMove_damage_classesInput>;

    @Field(() => [statsScalarWhereInput], {nullable:true})
    @Type(() => statsScalarWhereInput)
    deleteMany?: Array<statsScalarWhereInput>;
}
