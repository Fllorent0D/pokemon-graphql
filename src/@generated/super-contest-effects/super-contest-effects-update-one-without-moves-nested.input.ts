import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_effectsUpdateWithoutMovesInput } from './super-contest-effects-update-without-moves.input';

@InputType()
export class super_contest_effectsUpdateOneWithoutMovesNestedInput {

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => super_contest_effectsWhereUniqueInput, {nullable:true})
    @Type(() => super_contest_effectsWhereUniqueInput)
    connect?: super_contest_effectsWhereUniqueInput;

    @Field(() => super_contest_effectsUpdateWithoutMovesInput, {nullable:true})
    @Type(() => super_contest_effectsUpdateWithoutMovesInput)
    update?: super_contest_effectsUpdateWithoutMovesInput;
}
