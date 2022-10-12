import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutMove_effectsInput } from './moves-update-with-where-unique-without-move-effects.input';
import { movesUpdateManyWithWhereWithoutMove_effectsInput } from './moves-update-many-with-where-without-move-effects.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUncheckedUpdateManyWithoutMove_effectsNestedInput {

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

    @Field(() => [movesUpdateWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutMove_effectsInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutMove_effectsInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutMove_effectsInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutMove_effectsInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
