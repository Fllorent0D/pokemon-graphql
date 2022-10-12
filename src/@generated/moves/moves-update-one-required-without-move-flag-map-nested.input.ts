import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_flag_mapInput } from './moves-update-without-move-flag-map.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_flag_mapNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_flag_mapInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_flag_mapInput)
    update?: movesUpdateWithoutMove_flag_mapInput;
}
