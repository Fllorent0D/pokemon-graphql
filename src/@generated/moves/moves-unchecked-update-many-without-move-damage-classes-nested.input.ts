import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutMove_damage_classesInput } from './moves-update-with-where-unique-without-move-damage-classes.input';
import { movesUpdateManyWithWhereWithoutMove_damage_classesInput } from './moves-update-many-with-where-without-move-damage-classes.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUncheckedUpdateManyWithoutMove_damage_classesNestedInput {

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    set?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    disconnect?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    delete?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: Array<movesWhereUniqueInput>;

    @Field(() => [movesUpdateWithWhereUniqueWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutMove_damage_classesInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutMove_damage_classesInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutMove_damage_classesInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutMove_damage_classesInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
