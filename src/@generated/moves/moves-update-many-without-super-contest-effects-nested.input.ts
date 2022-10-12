import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutSuper_contest_effectsInput } from './moves-update-with-where-unique-without-super-contest-effects.input';
import { movesUpdateManyWithWhereWithoutSuper_contest_effectsInput } from './moves-update-many-with-where-without-super-contest-effects.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUpdateManyWithoutSuper_contest_effectsNestedInput {

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

    @Field(() => [movesUpdateWithWhereUniqueWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutSuper_contest_effectsInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutSuper_contest_effectsInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutSuper_contest_effectsInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutSuper_contest_effectsInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutSuper_contest_effectsInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
