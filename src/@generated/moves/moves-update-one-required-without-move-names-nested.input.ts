import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_namesInput } from './moves-update-without-move-names.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_namesNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_namesInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_namesInput)
    update?: movesUpdateWithoutMove_namesInput;
}
