import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_flavor_textInput } from './moves-update-without-move-flavor-text.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_flavor_textNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_flavor_textInput)
    update?: movesUpdateWithoutMove_flavor_textInput;
}
